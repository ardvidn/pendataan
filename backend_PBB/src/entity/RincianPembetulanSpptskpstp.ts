import { Column, Entity, Index } from "typeorm";

@Index(
  "rincian_pembetulan_spptskpstp_pkey",
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
    "noUrutPelayanan",
    "noUrutPemohon",
    "noUrutRinciPembetulan",
    "thnPelayanan",
    "thnPembetulan",
  ],
  { unique: true }
)
@Entity("rincian_pembetulan_spptskpstp", { schema: "public" })
export class RincianPembetulanSpptskpstp {
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

  @Column("character", { primary: true, name: "thn_pembetulan", length: 4 })
  thnPembetulan!: string;

  @Column("character", {
    primary: true,
    name: "no_urut_rinci_pembetulan",
    length: 2,
  })
  noUrutRinciPembetulan!: string;

  @Column("character varying", {
    name: "pbl_uraian",
    nullable: true,
    length: 255,
  })
  pblUraian!: string | null;

  @Column("character varying", {
    name: "pbl_semula",
    nullable: true,
    length: 255,
  })
  pblSemula!: string | null;

  @Column("character varying", {
    name: "pbl_menjadi",
    nullable: true,
    length: 255,
  })
  pblMenjadi!: string | null;
}
