import { Column, Entity } from "typeorm";

@Entity("d_reversal_kolektif", { schema: "public" })
export class DReversalKolektif {
  @Column("character varying", {
    name: "kode_bayar",
    nullable: true,
    length: 30,
  })
  kodeBayar!: string | null;

  @Column("character varying", {
    name: "gw_refnum",
    nullable: true,
    length: 30,
  })
  gwRefnum!: string | null;

  @Column("timestamp without time zone", {
    name: "settlement_date",
    nullable: true,
  })
  settlementDate!: Date | null;

  @Column("character", { name: "kd_bank", nullable: true, length: 2 })
  kdBank!: string | null;
}
