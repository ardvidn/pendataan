import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TempatPembayaran } from "./TempatPembayaran";
import { Stp } from "./Stp";
import { Pegawai } from "./Pegawai";

@Index("g9_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKantor", "kdKanwil", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdTp", "noUrut"], {})
@Index("pembayaran_stp_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "pembayaranStpKe", "tglTerbitStp"], { unique: true })
@Entity("pembayaran_stp", { schema: "public" })
export class PembayaranStp {
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

  @Column("timestamp without time zone", {
    primary: true,
    name: "tgl_terbit_stp",
  })
  tglTerbitStp!: Date;

  @Column("smallint", { primary: true, name: "pembayaran_stp_ke" })
  pembayaranStpKe!: number;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { name: "kd_tp", length: 2 })
  kdTp!: string;

  @Column("timestamp without time zone", { name: "tgl_pembayaran_stp" })
  tglPembayaranStp!: Date;

  @Column("character varying", { name: "ntpn", nullable: true, length: 20 })
  ntpn!: string | null;

  @Column("bigint", { name: "denda_stp", nullable: true })
  dendaStp!: string | null;

  @Column("bigint", { name: "jml_stp_yg_dibayar" })
  jmlStpYgDibayar!: string;

  @Column("character varying", {
    name: "uraian_bayar_stp",
    nullable: true,
    length: 255,
  })
  uraianBayarStp!: string | null;

  @Column("character varying", {
    name: "nm_penyetor",
    nullable: true,
    length: 30,
  })
  nmPenyetor!: string | null;

  @Column("timestamp without time zone", { name: "tgl_rekam_byr_stp" })
  tglRekamByrStp!: Date;

  @Column("character", { name: "thn_pajak_stp", nullable: true, length: 4 })
  thnPajakStp!: string | null;

  @ManyToOne(() => TempatPembayaran, (tempatPembayaran) => tempatPembayaran.pembayaranStps)
  @JoinColumn([
    { name: "kd_kanwil", referencedColumnName: "kdKanwil" },
    { name: "kd_kantor", referencedColumnName: "kdKantor" },
    { name: "kd_tp", referencedColumnName: "kdTp" },
  ])
  tempatPembayaran!: TempatPembayaran;

  @ManyToOne(() => Stp, (stp) => stp.pembayaranStps)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
    { name: "tgl_terbit_stp", referencedColumnName: "tglTerbitStp" },
  ])
  stp!: Stp;

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.pembayaranStps)
  @JoinColumn([{ name: "nip_perekam_byr_stp", referencedColumnName: "nip" }])
  nipPerekamByrStp!: Pegawai;
}
