import { Column, Entity, Index } from "typeorm";

@Index(
  "keputusan_keberatan_pbb_pkey",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"],
  { unique: true }
)
@Index(
  "h1_2_ak",
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
    "nipPencetakSkKeberatan",
    "noUrutPelayanan",
    "noUrutPemohon",
    "thnPelayanan",
  ],
  { unique: true }
)
@Index("h1_3_ak", ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"], {
  unique: true,
})
@Index(
  "h1_1_ak",
  ["bundelPelayanan", "jnsKeputusan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"],
  { unique: true }
)
@Index("h1_l6_fk", ["jnsSk", "kdKantor", "kdKanwil", "noSk"], {})
@Entity("keputusan_keberatan_pbb", { schema: "public" })
export class KeputusanKeberatanPbb {
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

  @Column("character", { name: "jns_sk", length: 1 })
  jnsSk!: string;

  @Column("character", { name: "no_sk", length: 30 })
  noSk!: string;

  @Column("character", { name: "jns_keputusan", length: 1 })
  jnsKeputusan!: string;

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

  @Column("bigint", { name: "luas_bumi_sk_keberatan", default: () => "0" })
  luasBumiSkKeberatan!: string;

  @Column("bigint", { name: "luas_bng_sk_keberatan", default: () => "0" })
  luasBngSkKeberatan!: string;

  @Column("bigint", { name: "njop_bumi_sk_keberatan", default: () => "0" })
  njopBumiSkKeberatan!: string;

  @Column("bigint", { name: "njop_bng_sk_keberatan", default: () => "0" })
  njopBngSkKeberatan!: string;

  @Column("bigint", { name: "pbb_sk_keberatan" })
  pbbSkKeberatan!: string;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_sk_keberatan",
    default: () => "statement_timestamp()",
  })
  tglCetakSkKeberatan!: Date;

  @Column("character", { name: "nip_pencetak_sk_keberatan", length: 18 })
  nipPencetakSkKeberatan!: string;
}
