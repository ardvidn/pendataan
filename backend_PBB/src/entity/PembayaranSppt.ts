import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Sppt } from "./Sppt";
import { Pegawai } from "./Pegawai";
import { SspPbbSppt } from "./SspPbbSppt";

@Index("pembayaran_sppt_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "pembayaranSpptKe", "thnPajakSppt"], { unique: true })
@Entity("pembayaran_sppt", { schema: "public" })
export class PembayaranSppt {
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

  @Column("character", {
    name: "status_billing_kolektif",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  statusBillingKolektif!: string | null;

  @Column("character varying", {
    name: "kode_bayar",
    nullable: true,
    length: 22,
  })
  kodeBayar!: string | null;

  @ManyToOne(() => Sppt, (sppt) => sppt.pembayaranSppts)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
    { name: "thn_pajak_sppt", referencedColumnName: "thnPajakSppt" },
  ])
  sppt!: Sppt;

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.pembayaranSppts)
  @JoinColumn([{ name: "nip_rekam_byr_sppt", referencedColumnName: "nip" }])
  nipRekamByrSppt!: Pegawai;

  @OneToOne(() => SspPbbSppt, (sspPbbSppt) => sspPbbSppt.pembayaranSppt)
  sspPbbSppt!: SspPbbSppt;
}
