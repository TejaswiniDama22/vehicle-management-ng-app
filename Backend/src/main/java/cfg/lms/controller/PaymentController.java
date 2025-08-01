package cfg.lms.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cfg.lms.dto.PaymentRequest;
import cfg.lms.entity.Booking;
import cfg.lms.entity.Payment;
import cfg.lms.repository.BookingRepository;
import cfg.lms.repository.PaymentRepository;
import cfg.lms.service.PaymentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
 
@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentRepository paymentRepository;
    private final BookingRepository bookingRepository;
    private final PaymentService paymentService;


@PostMapping("/pay")
public ResponseEntity<ResponseData> makePayment(@Valid @RequestBody PaymentRequest request) {
        ResponseData response = new ResponseData();

        try {
            Booking booking = bookingRepository.findById(request.getBookingId())
                    .orElseThrow(() -> new RuntimeException("Booking not found"));

            if (paymentRepository.existsByBooking(booking)) {
                response.setStatus("ERROR");
                response.setMessage("User already paid for the Booking ID: " + request.getBookingId());
                response.setData(null);
                return ResponseEntity.badRequest().body(response);
            }

            
            double expectedAmount = paymentService.calculateFare(booking);

          
            if (Double.compare(request.getAmount(), expectedAmount) != 0) {
                response.setStatus("ERROR");
                response.setMessage("Incorrect amount. Please pay the exact fare of ₹" + expectedAmount);
                response.setData(null);
                return ResponseEntity.badRequest().body(response);
            }

            
            Payment payment = new Payment();
            payment.setBooking(booking);
            payment.setAmount(request.getAmount());
            payment.setStatus(request.getStatus() != null ? request.getStatus() : "PAID");

            Payment saved = paymentRepository.save(payment);

            response.setStatus("SUCCESS");
            response.setMessage("Payment completed for Booking ID: " + request.getBookingId());
            response.setData(saved);
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.setStatus("ERROR");
            response.setMessage("Payment failed: " + e.getMessage());
            response.setData(null);
            return ResponseEntity.internalServerError().body(response);
        }
    }
@GetMapping("/{bookingId}")
public ResponseEntity<?> getPaymentByBookingId(@PathVariable Long bookingId) {
    Booking booking = bookingRepository.findById(bookingId)
        .orElseThrow(() -> new RuntimeException("Booking not found"));

    Payment payment = paymentRepository.findByBooking(booking)
        .orElse(null);

    if (payment == null) {
        return ResponseEntity.ok(Map.of(
            "paymentId", null,
            "bookingId", bookingId,
            "amount", 0,
            "status", "PENDING"
        ));
    }

    return ResponseEntity.ok(Map.of(
    		"paymentId", payment.getPaymentId(),
        "bookingId", bookingId,
        "amount", payment.getAmount(),
        "status", payment.getStatus()
    ));
}
@GetMapping("/amount/{bookingId}")
public ResponseEntity<?> getAmountByBookingId(@PathVariable Long bookingId) {
    Booking booking = bookingRepository.findById(bookingId)
        .orElseThrow(() -> new RuntimeException("Booking not found"));
    double amount = paymentService.calculateFare(booking);
    return ResponseEntity.ok(Map.of("amount", amount));
}
}