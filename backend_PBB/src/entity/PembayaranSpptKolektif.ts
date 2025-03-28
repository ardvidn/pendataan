import { Column, Entity } from "typeorm";

@Entity("pembayaran_sppt_kolektif", { schema: "public" })
export class PembayaranSpptKolektif {
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

  @Column("smallint", { name: "pembayaran_sppt_ke", nullable: true })
  pembayaranSpptKe!: number | null;

  @Column("character", { name: "kd_kanwil", nullable: true, length: 2 })
  kdKanwil!: string | null;

  @Column("character", { name: "kd_kantor", nullable: true, length: 2 })
  kdKantor!: string | null;

  @Column("character", { name: "kd_tp", nullable: true, length: 2 })
  kdTp!: string | null;

  @Column("bigint", { name: "denda_sppt", nullable: true })
  dendaSppt!: string | null;

  @Column("bigint", { name: "jml_sppt_yg_dibayar", nullable: true })
  jmlSpptYgDibayar!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_pembayaran_sppt",
    nullable: true,
  })
  tglPembayaranSppt!: Date | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_byr_sppt",
    nullable: true,
    default: () => "statement_timestamp()",
  })
  tglRekamByrSppt!: Date | null;

  @Column("character", {
    name: "nip_rekam_byr_sppt",
    nullable: true,
    length: 18,
  })
  nipRekamByrSppt!: string | null;
}
