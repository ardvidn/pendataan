import { Column, Entity, Index } from "typeorm";

@Index("pk_g1_z", ["kdBlok", "kdDati2", "kdJnsOp", "kdKantor", "kdKanwil", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdTp", "noUrut", "pembayaranSpptKe", "thnPajakSppt"], { unique: true })
@Entity("z_pembayaran_sppt", { schema: "public" })
export class ZPembayaranSppt {
  @Column("character", { name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { name: "thn_pajak_sppt", length: 4 })
  thnPajakSppt!: string;

  @Column("smallint", { name: "pembayaran_sppt_ke" })
  pembayaranSpptKe!: number;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { name: "kd_tp", length: 2 })
  kdTp!: string;

  @Column("bigint", { name: "denda_sppt", nullable: true })
  dendaSppt!: string | null;

  @Column("bigint", { name: "jml_sppt_yg_dibayar" })
  jmlSpptYgDibayar!: string;

  @Column("timestamp without time zone", { name: "tgl_pembayaran_sppt" })
  tglPembayaranSppt!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_byr_sppt",
    default: () => "statement_timestamp()",
  })
  tglRekamByrSppt!: Date;

  @Column("character", { name: "nip_rekam_byr_sppt", length: 18 })
  nipRekamByrSppt!: string;
}
