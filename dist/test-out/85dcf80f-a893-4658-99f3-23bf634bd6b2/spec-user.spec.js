import {
  UserService,
  init_user
} from "./chunk-UF4DXAJZ.js";
import "./chunk-KMTMA6MF.js";
import {
  TestBed,
  init_testing
} from "./chunk-BSQ7UZGP.js";
import "./chunk-TTULUY32.js";

// src/app/app/services/user.spec.ts
init_testing();
init_user();
describe("UserService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-user.spec.js.map
