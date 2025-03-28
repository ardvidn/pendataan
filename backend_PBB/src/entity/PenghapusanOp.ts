import { Column, Entity, Index } from "typeorm";

@Index("penghapusan_op_pkey", ["kdBlokPenghapusan", "kdDati2", "kdJnsOpPenghapusan", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrutPenghapusan"], { unique: true })
@Index("x8_1_ak", ["kdBlokPenghapusan", "kdDati2", "kdJnsOpPenghapusan", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrutPenghapusan", "thnPajakPenghapusanOp"], { unique: true })
@Index("x8_2_ak", ["kdBlokPenghapusan", "kdDati2", "kdJnsOpPenghapusan", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noFormulirPenghapusanOp", "noUrutPenghapusan"], { unique: true })
@Entity("penghapusan_op", { schema: "public" })
export class PenghapusanOp {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", {
    primary: true,
    name: "kd_blok_penghapusan",
    length: 3,
  })
  kdBlokPenghapusan!: string;

  @Column("character", {
    primary: true,
    name: "no_urut_penghapusan",
    length: 4,
  })
  noUrutPenghapusan!: string;

  @Column("character", {
    primary: true,
    name: "kd_jns_op_penghapusan",
    length: 1,
  })
  kdJnsOpPenghapusan!: string;

  @Column("character", { name: "thn_pajak_penghapusan_op", length: 4 })
  thnPajakPenghapusanOp!: string;

  @Column("character", { name: "no_formulir_penghapusan_op", length: 11 })
  noFormulirPenghapusanOp!: string;

  @Column("character varying", { name: "nama_wp_penghapusan", length: 30 })
  namaWpPenghapusan!: string;

  @Column("character", { name: "kd_znt_penghapusan", length: 2 })
  kdZntPenghapusan!: string;

  @Column("bigint", { name: "luas_bumi_penghapusan" })
  luasBumiPenghapusan!: string;

  @Column("bigint", { name: "nilai_bumi_penghapusan" })
  nilaiBumiPenghapusan!: string;

  @Column("bigint", { name: "pbb_hapus_op" })
  pbbHapusOp!: string;

  @Column("timestamp without time zone", {
    name: "tgl_penghapusan_op",
    default: () => "statement_timestamp()",
  })
  tglPenghapusanOp!: Date;

  @Column("character", { name: "nip_perekam_penghapusan_op", length: 18 })
  nipPerekamPenghapusanOp!: string;
}
