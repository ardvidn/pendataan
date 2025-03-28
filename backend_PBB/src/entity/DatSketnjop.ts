import { Column, Entity, Index } from "typeorm";

@Index("dat_sketnjop_pkey", ["bulan", "noUrut", "thnPajak"], { unique: true })
@Entity("dat_sketnjop", { schema: "public" })
export class DatSketnjop {
  @Column("bigint", { primary: true, name: "no_urut" })
  noUrut!: string;

  @Column("character varying", { primary: true, name: "bulan", length: 5 })
  bulan!: string;

  @Column("character", { primary: true, name: "thn_pajak", length: 4 })
  thnPajak!: string;

  @Column("character", { name: "nop", nullable: true, length: 18 })
  nop!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_cetak",
    nullable: true,
    default: () => "statement_timestamp()",
  })
  tglCetak!: Date | null;

  @Column("character", { name: "nip_pencetak", nullable: true, length: 18 })
  nipPencetak!: string | null;
}
