import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { PembayaranStp } from "./PembayaranStp";
import { TempatPembayaran } from "./TempatPembayaran";
import { DatObjekPajak } from "./DatObjekPajak";
import { Pegawai } from "./Pegawai";
import { TtrStp } from "./TtrStp";

@Index("stp_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "tglTerbitStp"], { unique: true })
@Entity("stp", { schema: "public" })
export class Stp {
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

  @Column("character varying", { name: "no_stp", nullable: true, length: 30 })
  noStp!: string | null;

  @Column("character", {
    name: "kd_jns_ketetapan",
    length: 1,
    default: () => "'0'",
  })
  kdJnsKetetapan!: string;

  @Column("character varying", {
    name: "no_srt_ketetapan",
    nullable: true,
    length: 30,
  })
  noSrtKetetapan!: string | null;

  @Column("character", { name: "thn_pajak_ketetapan", length: 4 })
  thnPajakKetetapan!: string;

  @Column("bigint", { name: "pbb_ketetapan_awal" })
  pbbKetetapanAwal!: string;

  @Column("bigint", { name: "pengurangan_pbb", nullable: true })
  penguranganPbb!: string | null;

  @Column("bigint", { name: "pengurangan_denda_skp", nullable: true })
  penguranganDendaSkp!: string | null;

  @Column("bigint", { name: "jml_pbb_telah_dibayar", nullable: true })
  jmlPbbTelahDibayar!: string | null;

  @Column("bigint", { name: "jml_pbb_kurang_bayar" })
  jmlPbbKurangBayar!: string;

  @Column("bigint", { name: "denda_stp" })
  dendaStp!: string;

  @Column("bigint", { name: "pengurangan_denda_sppt", nullable: true })
  penguranganDendaSppt!: string | null;

  @Column("bigint", { name: "pbb_yg_harus_dibayar_stp" })
  pbbYgHarusDibayarStp!: string;

  @Column("timestamp without time zone", { name: "tgl_jatuh_tempo_stp" })
  tglJatuhTempoStp!: Date;

  @Column("character", {
    name: "status_pembayaran_stp",
    length: 1,
    default: () => "'0'",
  })
  statusPembayaranStp!: string;

  @Column("timestamp without time zone", { name: "tgl_cetak_stp" })
  tglCetakStp!: Date;

  @OneToMany(() => PembayaranStp, (pembayaranStp) => pembayaranStp.stp)
  pembayaranStps!: PembayaranStp[];

  @ManyToOne(() => TempatPembayaran, (tempatPembayaran) => tempatPembayaran.stps)
  @JoinColumn([
    { name: "kd_kanwil", referencedColumnName: "kdKanwil" },
    { name: "kd_kantor", referencedColumnName: "kdKantor" },
    { name: "kd_tp", referencedColumnName: "kdTp" },
  ])
  tempatPembayaran!: TempatPembayaran;

  @ManyToOne(() => DatObjekPajak, (datObjekPajak) => datObjekPajak.stps)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
  ])
  datObjekPajak!: DatObjekPajak;

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.stps)
  @JoinColumn([{ name: "nip_pencetak_stp", referencedColumnName: "nip" }])
  nipPencetakStp!: Pegawai;

  @OneToOne(() => TtrStp, (ttrStp) => ttrStp.stp)
  ttrStp!: TtrStp;
}
