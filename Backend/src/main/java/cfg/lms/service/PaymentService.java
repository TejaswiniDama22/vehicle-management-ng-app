package cfg.lms.service;

import org.springframework.stereotype.Service;
import cfg.lms.entity.Booking;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentService {
    
    public double calculateFare(Booking booking) {
        long minutes = java.time.Duration.between(booking.getStartTime(), booking.getEndTime()).toMinutes();
        long hours = (long) Math.ceil(minutes / 60.0); // ✅ round up to next full hour

        if (hours <= 0) hours = 1;

        String vehicleType = booking.getVehicle().getType().toUpperCase();

        double rate = switch (vehicleType) {
            case "CAR" -> 50;
            case "BIKE" -> 30;
            default -> throw new IllegalArgumentException("Invalid vehicle type: " + vehicleType);
        };

        return rate * hours;
    }
}
