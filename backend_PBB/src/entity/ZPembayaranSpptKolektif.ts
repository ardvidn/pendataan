import { Column, Entity } from "typeorm";

@Entity("z_pembayaran_sppt_kolektif", { schema: "public" })
export class ZPembayaranSpptKolektif {
  @Column("character varying", { name: "kode_bayar", length: 22 })
  kodeBayar!: string;

  @Column("timestamp without time zone", {
    name: "tgl_bayar_bank",
    nullable: true,
  })
  tglBayarBank!: Date | null;

  @Column("bigint", { name: "total_pokok", nullable: true })
  totalPokok!: string | null;

  @Column("bigint", { name: "total_denda", nullable: true })
  totalDenda!: string | null;

  @Column("bigint", { name: "jumlah_total", nullable: true })
  jumlahTotal!: string | null;

  @Column("character", { name: "gw_refnum", nullable: true, length: 12 })
  gwRefnum!: string | null;

  @Column("character", { name: "switcher_id", nullable: true, length: 12 })
  switcherId!: string | null;

  @Column("timestamp without time zone", {
    name: "settlement_date",
    nullable: true,
  })
  settlementDate!: Date | null;

  @Column("character", { name: "kd_bank", nullable: true, length: 2 })
  kdBank!: string | null;

  @Column("character varying", {
    name: "nip_rekam_byr_sppt",
    nullable: true,
    length: 255,
  })
  nipRekamByrSppt!: string | null;

  @Column("character varying", { name: "idbank", nullable: true, length: 255 })
  idbank!: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt!: Date | null;

  @Column("character varying", { name: "merchant", nullable: true, length: 10 })
  merchant!: string | null;
}
