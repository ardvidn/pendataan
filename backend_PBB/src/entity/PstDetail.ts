import { Column, Entity, Index } from "typeorm";

@Index(
  "f2_3_ak",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdJnsPelayanan", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"],
  {}
)
@Index(
  "pk_f2t",
  [
    "bundelPelayanan",
    "kdBlokPemohon",
    "kdDati2Pemohon",
    "kdJnsOpPemohon",
    "kdJnsPelayanan",
    "kdKantor",
    "kdKanwil",
    "kdKecamatanPemohon",
    "kdKelurahanPemohon",
    "kdPropinsiPemohon",
    "noUrutPelayanan",
    "noUrutPemohon",
    "thnPajakPermohonan",
    "thnPelayanan",
  ],
  { unique: true }
)
@Index(
  "f2_4_ak",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPajakPermohonan", "thnPelayanan"],
  {}
)
@Index(
  "pst_detail_pkey",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"],
  { unique: true }
)
@Index(
  "f2_1_ak",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPajakPermohonan", "thnPelayanan"],
  {}
)
@Index(
  "f2_2_ak",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "statusSelesai", "thnPelayanan"],
  {}
)
@Index("f3_f2_fk", ["kdJnsPelayanan"], {})
@Entity("pst_detail", { schema: "public" })
export class PstDetail {
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

  @Column("character", { name: "kd_jns_pelayanan", length: 2 })
  kdJnsPelayanan!: string;

  @Column("character", { name: "thn_pajak_permohonan", length: 4 })
  thnPajakPermohonan!: string;

  @Column("character varying", {
    name: "nama_penerima",
    nullable: true,
    length: 30,
    default: () => "'WAJIB PAJAK'",
  })
  namaPenerima!: string | null;

  @Column("character varying", {
    name: "catatan_penyerahan",
    nullable: true,
    length: 75,
  })
  catatanPenyerahan!: string | null;

  @Column("smallint", { name: "status_selesai", default: () => "0" })
  statusSelesai!: number;

  @Column("timestamp without time zone", { name: "tgl_selesai" })
  tglSelesai!: Date;

  @Column("character", { name: "kd_seksi_berkas", length: 2 })
  kdSeksiBerkas!: string;

  @Column("timestamp without time zone", {
    name: "tgl_penyerahan",
    nullable: true,
  })
  tglPenyerahan!: Date | null;

  @Column("character", { name: "nip_penyerah", nullable: true, length: 18 })
  nipPenyerah!: string | null;
}
