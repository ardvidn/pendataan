import { Column, Entity, Index } from "typeorm";

@Index(
  "pembetulan_keberatan_pkey",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"],
  { unique: true }
)
@Index(
  "h3_2_ak",
  [
    "bundelPelayanan",
    "kdBlokPemohon",
    "kdDati2Pemohon",
    "kdJnsOpPemohon",
    "kdKantor",
    "kdKanwil",
    "kdKecamatanPemohon",
    "kdKelurahanPemohon",
    "kdPropinsiPemohon",
    "nipPencetakPembetulan",
    "noUrutPelayanan",
    "noUrutPemohon",
    "thnPelayanan",
  ],
  { unique: true }
)
@Index("h3_1_ak", ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"], {
  unique: true,
})
@Index(
  "h3_h1_fk",
  ["bundelPelayananKepKbrt", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayananKepKbrt", "noUrutPemohon", "thnPelayananKebKbrt"],
  {}
)
@Index("h3_l6_fk", ["jnsSk", "kdKantor", "kdKanwil", "noSk"], {})
@Entity("pembetulan_keberatan", { schema: "public" })
export class PembetulanKeberatan {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "thn_pelayanan", length: 4 })
  thnPelayanan!: string;

  @Column("character", { primary: true, name: "bundel_pelayanan", length: 4 })
  bundelPelayanan!: string;

  @Column("character", { primary: true, name: "no_urut_pelayanan", length: 3 })
  noUrutPelayanan!: string;

  @Column("character", {
    primary: true,
    name: "kd_propinsi_pemohon",
    length: 2,
  })
  kdPropinsiPemohon!: string;

  @Column("character", { primary: true, name: "kd_dati2_pemohon", length: 2 })
  kdDati2Pemohon!: string;

  @Column("character", {
    primary: true,
    name: "kd_kecamatan_pemohon",
    length: 3,
  })
  kdKecamatanPemohon!: string;

  @Column("character", {
    primary: true,
    name: "kd_kelurahan_pemohon",
    length: 3,
  })
  kdKelurahanPemohon!: string;

  @Column("character", { primary: true, name: "kd_blok_pemohon", length: 3 })
  kdBlokPemohon!: string;

  @Column("character", { primary: true, name: "no_urut_pemohon", length: 4 })
  noUrutPemohon!: string;

  @Column("character", { primary: true, name: "kd_jns_op_pemohon", length: 1 })
  kdJnsOpPemohon!: string;

  @Column("character", { name: "thn_pelayanan_keb_kbrt", length: 4 })
  thnPelayananKebKbrt!: string;

  @Column("character", { name: "bundel_pelayanan_kep_kbrt", length: 4 })
  bundelPelayananKepKbrt!: string;

  @Column("character", { name: "no_urut_pelayanan_kep_kbrt", length: 3 })
  noUrutPelayananKepKbrt!: string;

  @Column("character", { name: "jns_sk", length: 1 })
  jnsSk!: string;

  @Column("character", { name: "no_sk", length: 30 })
  noSk!: string;

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

  @Column("bigint", { name: "luas_bumi_pembetulan", default: () => "0" })
  luasBumiPembetulan!: string;

  @Column("bigint", { name: "luas_bng_pembetulan", default: () => "0" })
  luasBngPembetulan!: string;

  @Column("bigint", { name: "njop_bumi_pembetulan", default: () => "0" })
  njopBumiPembetulan!: string;

  @Column("bigint", { name: "njop_bng_pembetulan", default: () => "0" })
  njopBngPembetulan!: string;

  @Column("bigint", { name: "pbb_pembetulan" })
  pbbPembetulan!: string;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_pembetulan",
    default: () => "statement_timestamp()",
  })
  tglCetakPembetulan!: Date;

  @Column("character", { name: "nip_pencetak_pembetulan", length: 18 })
  nipPencetakPembetulan!: string;
}
