import { Column, Entity, Index } from "typeorm";

@Index("e15_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "statusPembayaranSkpKb", "thnPajakSkpKb"], { unique: true })
@Index("skp_kurang_bayar_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpKb"], { unique: true })
@Index("e15_3_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdKlsBng", "kdPropinsi", "noUrut", "thnPajakSkpKb"], { unique: true })
@Index("e15_2_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdKlsTanah", "kdPropinsi", "noUrut", "thnPajakSkpKb"], { unique: true })
@Entity("skp_kurang_bayar", { schema: "public" })
export class SkpKurangBayar {
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

  @Column("character", { primary: true, name: "thn_pajak_skp_kb", length: 4 })
  thnPajakSkpKb!: string;

  @Column("smallint", { name: "siklus_skp_kb" })
  siklusSkpKb!: number;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { name: "kd_tp", length: 2 })
  kdTp!: string;

  @Column("character", {
    name: "kd_kls_tanah",
    length: 3,
    default: () => "'XXX'",
  })
  kdKlsTanah!: string;

  @Column("character", {
    name: "thn_awal_kls_tanah",
    length: 4,
    default: () => "'1986'",
  })
  thnAwalKlsTanah!: string;

  @Column("character", {
    name: "kd_kls_bng",
    length: 3,
    default: () => "'XXX'",
  })
  kdKlsBng!: string;

  @Column("character", {
    name: "thn_awal_kls_bng",
    length: 4,
    default: () => "'1986'",
  })
  thnAwalKlsBng!: string;

  @Column("timestamp without time zone", { name: "tgl_jatuh_tempo_skp_kb" })
  tglJatuhTempoSkpKb!: Date;

  @Column("bigint", { name: "luas_bumi_skp_kb", default: () => "0" })
  luasBumiSkpKb!: string;

  @Column("bigint", { name: "luas_bng_skp_kb", default: () => "0" })
  luasBngSkpKb!: string;

  @Column("bigint", { name: "njop_bumi_skp_kb", default: () => "0" })
  njopBumiSkpKb!: string;

  @Column("bigint", { name: "njop_bng_skp_kb", default: () => "0" })
  njopBngSkpKb!: string;

  @Column("bigint", { name: "njop_skp_kb" })
  njopSkpKb!: string;

  @Column("integer", { name: "njoptkp_skp_kb" })
  njoptkpSkpKb!: number;

  @Column("numeric", { name: "njkp_skp_kb", precision: 5, scale: 2 })
  njkpSkpKb!: string;

  @Column("bigint", { name: "pbb_terhutang_skp_kb" })
  pbbTerhutangSkpKb!: string;

  @Column("bigint", { name: "besar_denda_skp_kb" })
  besarDendaSkpKb!: string;

  @Column("bigint", { name: "faktor_pengurang_skp_kb", nullable: true })
  faktorPengurangSkpKb!: string | null;

  @Column("bigint", { name: "pbb_yg_harus_dibayar_skp_kb" })
  pbbYgHarusDibayarSkpKb!: string;

  @Column("bigint", { name: "pbb_sppt" })
  pbbSppt!: string;

  @Column("character", {
    name: "status_pembayaran_skp_kb",
    length: 1,
    default: () => "'0'",
  })
  statusPembayaranSkpKb!: string;

  @Column("timestamp without time zone", { name: "tgl_terbit_skp_kb" })
  tglTerbitSkpKb!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_skp_kb",
    default: () => "statement_timestamp()",
  })
  tglCetakSkpKb!: Date;

  @Column("character", { name: "nip_pencetak_skp_kb", length: 18 })
  nipPencetakSkpKb!: string;
}
