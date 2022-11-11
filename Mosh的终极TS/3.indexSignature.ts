class SeatAssignment {
    //索引签名
    [seatAssignment:string]:string;
}

const seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "John";
// seats["A3"] = 3;//error
