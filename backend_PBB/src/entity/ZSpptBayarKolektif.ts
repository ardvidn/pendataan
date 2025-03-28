import { Column, Entity } from "typeorm";

@Entity("z_sppt_bayar_kolektif", { schema: "public" })
export class ZSpptBayarKolektif {
  @Column("character", { name: "kd_propinsi", nullable: true, length: 2 })
  kdPropinsi!: string | null;

  @Column("character", { name: "kd_dati2", nullable: true, length: 2 })
  kdDati2!: string | null;

  @Column("character", { name: "kd_kecamatan", nullable: true, length: 3 })
  kdKecamatan!: string | null;

  @Column("character", { name: "kd_kelurahan", nullable: true, length: 3 })
  kdKelurahan!: string | null;

  @Column("character", { name: "kd_blok", nullable: true, length: 3 })
  kdBlok!: string | null;

  @Column("character", { name: "no_urut", nullable: true, length: 4 })
  noUrut!: string | null;

  @Column("character", { name: "kd_jns_op", nullable: true, length: 1 })
  kdJnsOp!: string | null;

  @Column("character", { name: "thn_pajak_sppt", nullable: true, length: 4 })
  thnPajakSppt!: string | null;

  @Column("character varying", {
    name: "kode_bayar",
    nullable: true,
    length: 22,
  })
  kodeBayar!: string | null;

  @Column("bigint", { name: "jumlah_pokok", nullable: true })
  jumlahPokok!: string | null;

  @Column("bigint", { name: "jumlah_denda", nullable: true })
  jumlahDenda!: string | null;

  @Column("bigint", { name: "jumlah_total", nullable: true })
  jumlahTotal!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_bayar_sppt",
    nullable: true,
  })
  tglBayarSppt!: Date | null;

  @Column("timestamp without time zone", {
    name: "tgl_jatuh_tempo_kodebayar",
    nullable: true,
  })
  tglJatuhTempoKodebayar!: Date | null;

  @Column("timestamp without time zone", {
    name: "tgl_jatuh_tempo_sppt",
    nullable: true,
  })
  tglJatuhTempoSppt!: Date | null;

  @Column("bigint", { name: "idbank", nullable: true })
  idbank!: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt!: Date | null;

  @Column("integer", { name: "no_urut_billing", nullable: true })
  noUrutBilling!: number | null;

  @Column("smallint", {
    name: "status_bayar",
    nullable: true,
    default: () => "0",
  })
  statusBayar!: number | null;

  @Column("character", { name: "kd_bank_tunggal", nullable: true, length: 2 })
  kdBankTunggal!: string | null;

  @Column("character", { name: "kd_dukuh", nullable: true, length: 3 })
  kdDukuh!: string | null;
}
