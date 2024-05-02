import validateOverlap from "../utils/validateOverlap";

describe("validateOverlap function", () => {
  it("Returns true for overlapping bookings", () => {
    const result = validateOverlap(
      {
        id: "1",
        email: "andre@test.com",
        firstName: "Andre",
        lastName: "Krauss",
        startDate: "2024-04-01",
        endDate: "2024-04-10",
      },
      [
        {
          id: "2",
          propertyId: "2",
          email: "andre@test.com",
          firstName: "Andre",
          lastName: "Krauss",
          startDate: "2024-04-01",
          endDate: "2024-04-10",
        },
        {
          id: "3",
          propertyId: "3",
          email: "andre@test.com",
          firstName: "Andre",
          lastName: "Krauss",
          startDate: "2024-05-01",
          endDate: "2024-05-10",
        },
      ],
    );

    expect(result).toBe(true);
  });

  it("Returns false for non overlapping bookings", () => {
    const result = validateOverlap(
      {
        id: "1",
        email: "andre@test.com",
        firstName: "Andre",
        lastName: "Krauss",
        startDate: "2024-04-01",
        endDate: "2024-04-10",
      },
      [
        {
          id: "2",
          propertyId: "2",
          email: "andre@test.com",
          firstName: "Andre",
          lastName: "Krauss",
          startDate: "2024-05-01",
          endDate: "2024-05-10",
        },
      ],
    );

    expect(result).toBe(false);
  });

  it("Returns false when the booking has the same id since its an update", () => {
    const result = validateOverlap(
      {
        id: "1",
        email: "andre@test.com",
        firstName: "Andre",
        lastName: "Krauss",
        startDate: "2024-04-01",
        endDate: "2024-04-10",
      },
      [
        {
          id: "1",
          propertyId: "1",
          email: "andre@test.com",
          firstName: "Andre",
          lastName: "Krauss",
          startDate: "2024-04-01",
          endDate: "2024-04-05",
        },
      ],
    );

    expect(result).toBe(false);
  });
});
