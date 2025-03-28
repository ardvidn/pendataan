import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { NopKolektif } from "./NopKolektif";

@Index("nop_kolektif_piutang_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt", "thnPembentukan"], { unique: true })
@Entity("nop_kolektif_piutang", { schema: "public" })
export class NopKolektifPiutang {
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

  @Column("character varying", {
    name: "nm_wp_sppt",
    nullable: true,
    length: 30,
  })
  nmWpSppt!: string | null;

  @Column("character varying", {
    name: "jln_wp_sppt",
    nullable: true,
    length: 30,
  })
  jlnWpSppt!: string | null;

  @Column("character varying", {
    name: "blok_kav_no_wp_sppt",
    nullable: true,
    length: 15,
  })
  blokKavNoWpSppt!: string | null;

  @Column("character", { name: "rw_wp_sppt", nullable: true, length: 2 })
  rwWpSppt!: string | null;

  @Column("character", { name: "rt_wp_sppt", nullable: true, length: 3 })
  rtWpSppt!: string | null;

  @Column("character varying", {
    name: "kelurahan_wp_sppt",
    nullable: true,
    length: 30,
  })
  kelurahanWpSppt!: string | null;

  @Column("character varying", {
    name: "kota_wp_sppt",
    nullable: true,
    length: 30,
  })
  kotaWpSppt!: string | null;

  @Column("bigint", { name: "luas_bumi_sppt", nullable: true })
  luasBumiSppt!: string | null;

  @Column("bigint", { name: "luas_bng_sppt", nullable: true })
  luasBngSppt!: string | null;

  @Column("bigint", { name: "njop_bumi_sppt", nullable: true })
  njopBumiSppt!: string | null;

  @Column("bigint", { name: "njop_bng_sppt", nullable: true })
  njopBngSppt!: string | null;

  @Column("bigint", { name: "pbb_yg_harus_dibayar_sppt", nullable: true })
  pbbYgHarusDibayarSppt!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_jatuh_tempo_sppt",
    nullable: true,
  })
  tglJatuhTempoSppt!: Date | null;

  @Column("character", { name: "status_bayar", nullable: true, length: 1 })
  statusBayar!: string | null;

  @Column("character varying", {
    name: "keterangan",
    nullable: true,
    length: 255,
  })
  keterangan!: string | null;

  @Column("character varying", {
    name: "no_formulir",
    nullable: true,
    length: 30,
  })
  noFormulir!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_pembentukan",
    nullable: true,
  })
  tglPembentukan!: Date | null;

  @Column("character", { name: "nip_pembentuk", nullable: true, length: 18 })
  nipPembentuk!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_pemutakhiran",
    nullable: true,
  })
  tglPemutakhiran!: Date | null;

  @Column("character", { name: "nip_pemutakhir", nullable: true, length: 18 })
  nipPemutakhir!: string | null;

  @Column("character", { name: "status_glondongan", nullable: true, length: 1 })
  statusGlondongan!: string | null;

  @Column("character", {
    primary: true,
    name: "thn_pembentukan",
    length: 4,
    default: () => "'2017'",
  })
  thnPembentukan!: string;

  @ManyToOne(() => NopKolektif, (nopKolektif) => nopKolektif.nopKolektifPiutangs)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
    { name: "thn_pembentukan", referencedColumnName: "thnPembentukan" },
  ])
  nopKolektif!: NopKolektif;
}
