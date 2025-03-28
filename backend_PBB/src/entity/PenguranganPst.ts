import { Column, Entity, Index } from "typeorm";

@Index(
  "i3_1_ak",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan", "thnPengPst"],
  { unique: true }
)
@Index(
  "i3_2_ak",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan", "thnPengPst"],
  { unique: true }
)
@Index(
  "pengurangan_pst_pkey",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"],
  { unique: true }
)
@Index("i3_l6_fk", ["jnsSk", "kdKantor", "kdKanwil", "noSk"], {})
@Entity("pengurangan_pst", { schema: "public" })
export class PenguranganPst {
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

  @Column("character", { name: "thn_peng_pst", length: 4 })
  thnPengPst!: string;

  @Column("character", { name: "jns_sk", length: 1 })
  jnsSk!: string;

  @Column("character", { name: "no_sk", length: 30 })
  noSk!: string;

  @Column("character", { name: "status_sk_peng_pst", length: 1 })
  statusSkPengPst!: string;

  @Column("numeric", { name: "pct_pengurangan_pst", precision: 5, scale: 2 })
  pctPenguranganPst!: string;
}
