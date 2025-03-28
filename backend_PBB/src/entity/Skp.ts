import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { PembayaranSkp } from "./PembayaranSkp";
import { TempatPembayaran } from "./TempatPembayaran";
import { KelasBangunan } from "./KelasBangunan";
import { KelasTanah } from "./KelasTanah";
import { DatObjekPajak } from "./DatObjekPajak";
import { Pegawai } from "./Pegawai";
import { SkpOpBersama } from "./SkpOpBersama";
import { TtrSkp } from "./TtrSkp";

@Index("skp_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "tglTerbitSkp", "thnPajakSkp"], { unique: true })
@Entity("skp", { schema: "public" })
export class Skp {
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

  @Column("character", { name: "no_skp", length: 30 })
  noSkp!: string;

  @Column("smallint", { name: "siklus_skp" })
  siklusSkp!: number;

  @Column("timestamp without time zone", { name: "tgl_jatuh_tempo_skp" })
  tglJatuhTempoSkp!: Date;

  @Column("bigint", { name: "luas_bumi_skp", default: () => "0" })
  luasBumiSkp!: string;

  @Column("bigint", { name: "luas_bng_skp", default: () => "0" })
  luasBngSkp!: string;

  @Column("bigint", { name: "njop_bumi_skp", default: () => "0" })
  njopBumiSkp!: string;

  @Column("bigint", { name: "njop_bng_skp", default: () => "0" })
  njopBngSkp!: string;

  @Column("bigint", { name: "njop_skp", default: () => "0" })
  njopSkp!: string;

  @Column("integer", { name: "njoptkp_skp", default: () => "0" })
  njoptkpSkp!: number;

  @Column("numeric", {
    name: "njkp_skp",
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  njkpSkp!: string;

  @Column("bigint", { name: "pbb_terhutang_skp", default: () => "0" })
  pbbTerhutangSkp!: string;

  @Column("numeric", {
    name: "persen_pengenaan_skp",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  persenPengenaanSkp!: string | null;

  @Column("bigint", { name: "pengenaan_khusus_skp", nullable: true })
  pengenaanKhususSkp!: string | null;

  @Column("bigint", { name: "pbb_yg_harus_dibayar_skp", default: () => "0" })
  pbbYgHarusDibayarSkp!: string;

  @Column("bigint", { name: "pokok_harus_dibayar_skp", default: () => "0" })
  pokokHarusDibayarSkp!: string;

  @Column("bigint", { name: "besar_denda_skp", default: () => "0" })
  besarDendaSkp!: string;

  @Column("bigint", { name: "pbb_msh_harus_dibayar_skp", default: () => "0" })
  pbbMshHarusDibayarSkp!: string;

  @Column("character", {
    name: "status_pembayaran_skp",
    length: 1,
    default: () => "'0'",
  })
  statusPembayaranSkp!: string;

  @Column("character", {
    name: "status_tagihan_skp",
    length: 1,
    default: () => "'1'",
  })
  statusTagihanSkp!: string;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_skp",
    default: () => "statement_timestamp()",
  })
  tglCetakSkp!: Date;

  @OneToMany(() => PembayaranSkp, (pembayaranSkp) => pembayaranSkp.skp)
  pembayaranSkps!: PembayaranSkp[];

  @ManyToOne(() => TempatPembayaran, (tempatPembayaran) => tempatPembayaran.skps)
  @JoinColumn([
    { name: "kd_kanwil", referencedColumnName: "kdKanwil" },
    { name: "kd_kantor", referencedColumnName: "kdKantor" },
    { name: "kd_tp", referencedColumnName: "kdTp" },
  ])
  tempatPembayaran!: TempatPembayaran;

  @ManyToOne(() => KelasBangunan, (kelasBangunan) => kelasBangunan.skps)
  @JoinColumn([
    { name: "kd_kls_bng", referencedColumnName: "kdKlsBng" },
    { name: "thn_awal_kls_bng", referencedColumnName: "thnAwalKlsBng" },
  ])
  kelasBangunan!: KelasBangunan;

  @ManyToOne(() => KelasTanah, (kelasTanah) => kelasTanah.skps)
  @JoinColumn([
    { name: "kd_kls_tanah", referencedColumnName: "kdKlsTanah" },
    { name: "thn_awal_kls_tanah", referencedColumnName: "thnAwalKlsTanah" },
  ])
  kelasTanah!: KelasTanah;

  @ManyToOne(() => DatObjekPajak, (datObjekPajak) => datObjekPajak.skps)
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

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.skps)
  @JoinColumn([{ name: "nip_pencetak_skp", referencedColumnName: "nip" }])
  nipPencetakSkp!: Pegawai;

  @OneToOne(() => SkpOpBersama, (skpOpBersama) => skpOpBersama.skp)
  skpOpBersama!: SkpOpBersama;

  @OneToOne(() => TtrSkp, (ttrSkp) => ttrSkp.skp)
  ttrSkp!: TtrSkp;
}
