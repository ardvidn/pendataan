import { Column, Entity, Index } from "typeorm";

@Index(
  "pk_17",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan", "thnPembetulan"],
  { unique: true }
)
@Index(
  "pembetulan_spptskpstp_pkey",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"],
  { unique: true }
)
@Index(
  "i7_2_ak",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan", "thnPembetulan"],
  { unique: true }
)
@Index("i7_l6_fk", ["jnsSk", "kdKantor", "kdKanwil", "noSk"], {})
@Entity("pembetulan_spptskpstp", { schema: "public" })
export class PembetulanSpptskpstp {
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

  @Column("character", { name: "thn_pembetulan", length: 4 })
  thnPembetulan!: string;

  @Column("character", { name: "jns_sk", length: 1 })
  jnsSk!: string;

  @Column("character", { name: "no_sk", length: 30 })
  noSk!: string;

  @Column("character varying", { name: "pbl_nama_wp", length: 30 })
  pblNamaWp!: string;

  @Column("character varying", { name: "pbl_jalan_wp", length: 30 })
  pblJalanWp!: string;

  @Column("character varying", {
    name: "pbl_blok_kav_no_wp",
    nullable: true,
    length: 15,
  })
  pblBlokKavNoWp!: string | null;

  @Column("bigint", { name: "pbl_luas_bumi", default: () => "0" })
  pblLuasBumi!: string;

  @Column("bigint", { name: "pbl_luas_bng", default: () => "0" })
  pblLuasBng!: string;

  @Column("bigint", { name: "pbl_njop_bumi", default: () => "0" })
  pblNjopBumi!: string;

  @Column("bigint", { name: "pbl_njop_bng", default: () => "0" })
  pblNjopBng!: string;

  @Column("bigint", { name: "pbl_pbb" })
  pblPbb!: string;

  @Column("character", { name: "pbl_status", length: 1 })
  pblStatus!: string;

  @Column("character", {
    name: "jns_surat_yg_dibetulkan",
    nullable: true,
    length: 2,
  })
  jnsSuratYgDibetulkan!: string | null;

  @Column("character varying", {
    name: "no_surat_yg_dibetulkan",
    nullable: true,
    length: 30,
  })
  noSuratYgDibetulkan!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_surat_yg_dibetulkan",
    nullable: true,
  })
  tglSuratYgDibetulkan!: Date | null;
}
