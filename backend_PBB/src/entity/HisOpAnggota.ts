import { Column, Entity, Index } from "typeorm";

@Index(
  "x13_1_ak",
  ["hisKdBlokInduk", "hisKdDati2Induk", "hisKdJnsOpInduk", "hisKdKecamatanInduk", "hisKdKelurahanInduk", "hisKdPropinsiInduk", "hisNoUrutInduk", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"],
  { unique: true }
)
@Index("his_op_anggota_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], { unique: true })
@Entity("his_op_anggota", { schema: "public" })
export class HisOpAnggota {
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

  @Column("character", { name: "his_kd_propinsi_induk", length: 2 })
  hisKdPropinsiInduk!: string;

  @Column("character", { name: "his_kd_dati2_induk", length: 2 })
  hisKdDati2Induk!: string;

  @Column("character", { name: "his_kd_kecamatan_induk", length: 3 })
  hisKdKecamatanInduk!: string;

  @Column("character", { name: "his_kd_kelurahan_induk", length: 3 })
  hisKdKelurahanInduk!: string;

  @Column("character", { name: "his_kd_blok_induk", length: 3 })
  hisKdBlokInduk!: string;

  @Column("character", { name: "his_no_urut_induk", length: 4 })
  hisNoUrutInduk!: string;

  @Column("character", { name: "his_kd_jns_op_induk", length: 1 })
  hisKdJnsOpInduk!: string;

  @Column("bigint", { name: "his_luas_bumi_beban" })
  hisLuasBumiBeban!: string;

  @Column("bigint", { name: "his_luas_bng_beban" })
  hisLuasBngBeban!: string;

  @Column("bigint", { name: "his_nilai_bumi_beban" })
  hisNilaiBumiBeban!: string;

  @Column("bigint", { name: "his_nilai_bng_beban" })
  hisNilaiBngBeban!: string;
}
