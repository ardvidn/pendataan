import { Column, Entity } from "typeorm";

@Entity("log_pembayaran", { schema: "public" })
export class LogPembayaran {
  @Column("character varying", {
    name: "kode_bayar",
    nullable: true,
    length: 30,
  })
  kodeBayar!: string | null;

  @Column("character varying", { name: "merchant", nullable: true, length: 30 })
  merchant!: string | null;

  @Column("character varying", { name: "tipe", nullable: true, length: 10 })
  tipe!: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 10 })
  status!: string | null;

  @Column("timestamp without time zone", {
    name: "settlement_date",
    nullable: true,
  })
  settlementDate!: Date | null;

  @Column("character varying", {
    name: "gw_refnum",
    nullable: true,
    length: 20,
  })
  gwRefnum!: string | null;

  @Column("character varying", {
    name: "kode_pengesahan",
    nullable: true,
    length: 30,
  })
  kodePengesahan!: string | null;
}
