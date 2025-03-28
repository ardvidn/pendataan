import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { PembayaranSppt } from "./PembayaranSppt";

@Index("ssp_pbb_sppt_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "pembayaranSpptKe", "thnPajakSppt"], { unique: true })
@Entity("ssp_pbb_sppt", { schema: "public" })
export class SspPbbSppt {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { primary: true, name: "thn_pajak_sppt", length: 4 })
  thnPajakSppt!: string;

  @Column("smallint", { primary: true, name: "pembayaran_sppt_ke" })
  pembayaranSpptKe!: number;

  @Column("character", { name: "jns_pembayaran", nullable: true, length: 1 })
  jnsPembayaran!: string | null;

  @Column("character varying", { name: "no_srt_ketetapan", length: 30 })
  noSrtKetetapan!: string;

  @Column("timestamp without time zone", { name: "tgl_srt_ketetapan" })
  tglSrtKetetapan!: Date;

  @Column("character varying", { name: "ntpn", nullable: true, length: 20 })
  ntpn!: string | null;

  @Column("character varying", {
    name: "uraian_bayar_sppt",
    nullable: true,
    length: 255,
  })
  uraianBayarSppt!: string | null;

  @Column("character varying", {
    name: "nm_penyetor",
    nullable: true,
    length: 30,
  })
  nmPenyetor!: string | null;

  @OneToOne(() => PembayaranSppt, (pembayaranSppt) => pembayaranSppt.sspPbbSppt)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
    { name: "thn_pajak_sppt", referencedColumnName: "thnPajakSppt" },
    { name: "pembayaran_sppt_ke", referencedColumnName: "pembayaranSpptKe" },
  ])
  pembayaranSppt!: PembayaranSppt;
}
