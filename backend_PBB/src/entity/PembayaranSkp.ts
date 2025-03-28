import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TempatPembayaran } from "./TempatPembayaran";
import { Skp } from "./Skp";
import { Pegawai } from "./Pegawai";

@Index("pembayaran_skp_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "pembayaranSkpKe", "tglTerbitSkp", "thnPajakSkp"], { unique: true })
@Index("g24_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKantor", "kdKanwil", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdTp", "noUrut", "pembayaranSkpKe", "thnPajakSkp"], {})
@Entity("pembayaran_skp", { schema: "public" })
export class PembayaranSkp {
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

  @Column("character", { primary: true, name: "thn_pajak_skp", length: 4 })
  thnPajakSkp!: string;

  @Column("timestamp without time zone", {
    primary: true,
    name: "tgl_terbit_skp",
  })
  tglTerbitSkp!: Date;

  @Column("smallint", { primary: true, name: "pembayaran_skp_ke" })
  pembayaranSkpKe!: number;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { name: "kd_tp", length: 2 })
  kdTp!: string;

  @Column("timestamp without time zone", { name: "tgl_pembayaran_skp" })
  tglPembayaranSkp!: Date;

  @Column("character varying", { name: "ntpn", nullable: true, length: 20 })
  ntpn!: string | null;

  @Column("bigint", { name: "denda_skp" })
  dendaSkp!: string;

  @Column("bigint", { name: "jml_skp_yg_dibayar" })
  jmlSkpYgDibayar!: string;

  @Column("character varying", {
    name: "uraian_bayar_skp",
    nullable: true,
    length: 255,
  })
  uraianBayarSkp!: string | null;

  @Column("character varying", {
    name: "nm_penyetor",
    nullable: true,
    length: 30,
  })
  nmPenyetor!: string | null;

  @Column("timestamp without time zone", { name: "tgl_rekam_byr_skp" })
  tglRekamByrSkp!: Date;

  @ManyToOne(() => TempatPembayaran, (tempatPembayaran) => tempatPembayaran.pembayaranSkps)
  @JoinColumn([
    { name: "kd_kanwil", referencedColumnName: "kdKanwil" },
    { name: "kd_kantor", referencedColumnName: "kdKantor" },
    { name: "kd_tp", referencedColumnName: "kdTp" },
  ])
  tempatPembayaran!: TempatPembayaran;

  @ManyToOne(() => Skp, (skp) => skp.pembayaranSkps)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
    { name: "thn_pajak_skp", referencedColumnName: "thnPajakSkp" },
    { name: "tgl_terbit_skp", referencedColumnName: "tglTerbitSkp" },
  ])
  skp!: Skp;

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.pembayaranSkps)
  @JoinColumn([{ name: "nip_perekam_byr_skp", referencedColumnName: "nip" }])
  nipPerekamByrSkp!: Pegawai;
}
