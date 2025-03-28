import { Column, Entity, Index } from "typeorm";

@Index(
  "j4_1_ak",
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
    "noUrutPenerimaKompensasi",
    "thnPelayanan",
  ],
  { unique: true }
)
@Index(
  "penerima_kompensasi_pkey",
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
    "noUrutPenerimaKompensasi",
    "thnPelayanan",
  ],
  { unique: true }
)
@Index(
  "j4_2_ak",
  [
    "kdBlokKompensasi",
    "kdBlokPemohon",
    "kdDati2Kompensasi",
    "kdDati2Pemohon",
    "kdJnsOpKompensasi",
    "kdJnsOpPemohon",
    "kdKecamatanKompensasi",
    "kdKecamatanPemohon",
    "kdKelurahanKompensasi",
    "kdKelurahanPemohon",
    "kdPropinsiKompensasi",
    "kdPropinsiPemohon",
    "noUrutKompensasi",
    "noUrutPemohon",
    "noUrutPenerimaKompensasi",
    "thnPajakKompensasi",
  ],
  {}
)
@Entity("penerima_kompensasi", { schema: "public" })
export class PenerimaKompensasi {
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

  @Column("smallint", { primary: true, name: "no_urut_penerima_kompensasi" })
  noUrutPenerimaKompensasi!: number;

  @Column("character", { name: "kd_propinsi_kompensasi", length: 2 })
  kdPropinsiKompensasi!: string;

  @Column("character", { name: "kd_dati2_kompensasi", length: 2 })
  kdDati2Kompensasi!: string;

  @Column("character", { name: "kd_kecamatan_kompensasi", length: 3 })
  kdKecamatanKompensasi!: string;

  @Column("character", { name: "kd_kelurahan_kompensasi", length: 3 })
  kdKelurahanKompensasi!: string;

  @Column("character", { name: "kd_blok_kompensasi", length: 3 })
  kdBlokKompensasi!: string;

  @Column("character", { name: "no_urut_kompensasi", length: 4 })
  noUrutKompensasi!: string;

  @Column("character", { name: "kd_jns_op_kompensasi", length: 1 })
  kdJnsOpKompensasi!: string;

  @Column("character", { name: "thn_pajak_kompensasi", length: 4 })
  thnPajakKompensasi!: string;

  @Column("bigint", { name: "nilai_yang_dikompensasi" })
  nilaiYangDikompensasi!: string;
}
