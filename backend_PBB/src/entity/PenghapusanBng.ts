import { Column, Entity, Index } from "typeorm";

@Index("penghapusan_bng_pkey", ["indeksPenghapusanBng", "kdBlokPenghapusanBng", "kdDati2", "kdJnsOpPenghapusanBng", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBngPenghapusan", "noUrutPenghapusanBng"], { unique: true })
@Index("x9_1_ak", ["indeksPenghapusanBng", "kdBlokPenghapusanBng", "kdDati2", "kdJnsOpPenghapusanBng", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBngPenghapusan", "noUrutPenghapusanBng", "thnPajakPenghapusanBng"], { unique: true })
@Index("x9_2_ak", ["kdBlokPenghapusanBng", "kdDati2", "kdJnsOpPenghapusanBng", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBngPenghapusan", "noFormulirPenghapusanBng", "noUrutPenghapusanBng"], { unique: true })
@Entity("penghapusan_bng", { schema: "public" })
export class PenghapusanBng {
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
    name: "kd_blok_penghapusan_bng",
    length: 3,
  })
  kdBlokPenghapusanBng!: string;

  @Column("character", {
    primary: true,
    name: "no_urut_penghapusan_bng",
    length: 4,
  })
  noUrutPenghapusanBng!: string;

  @Column("character", {
    primary: true,
    name: "kd_jns_op_penghapusan_bng",
    length: 1,
  })
  kdJnsOpPenghapusanBng!: string;

  @Column("smallint", { primary: true, name: "no_bng_penghapusan" })
  noBngPenghapusan!: number;

  @Column("smallint", { primary: true, name: "indeks_penghapusan_bng" })
  indeksPenghapusanBng!: number;

  @Column("character", { name: "thn_pajak_penghapusan_bng", length: 4 })
  thnPajakPenghapusanBng!: string;

  @Column("character", { name: "no_formulir_penghapusan_bng", length: 11 })
  noFormulirPenghapusanBng!: string;

  @Column("bigint", { name: "luas_bng_penghapusan" })
  luasBngPenghapusan!: string;

  @Column("bigint", { name: "nilai_bng_penghapusan" })
  nilaiBngPenghapusan!: string;

  @Column("timestamp without time zone", {
    name: "tgl_penghapusan_bng",
    default: () => "statement_timestamp()",
  })
  tglPenghapusanBng!: Date;

  @Column("character", { name: "nip_perekam_penghapusan_bng", length: 18 })
  nipPerekamPenghapusanBng!: string;
}
