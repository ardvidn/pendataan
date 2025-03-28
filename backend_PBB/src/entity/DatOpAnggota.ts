import { Column, Entity, Index } from "typeorm";

@Index("d10_1_ak", ["kdBlok", "kdBlokInduk", "kdDati2", "kdDati2Induk", "kdJnsOp", "kdJnsOpInduk", "kdKecamatan", "kdKecamatanInduk", "kdKelurahan", "kdKelurahanInduk", "kdPropinsi", "kdPropinsiInduk", "noUrut", "noUrutInduk"], {
  unique: true,
})
@Index("dat_op_anggota_pkey", ["kdBlok", "kdBlokInduk", "kdDati2", "kdDati2Induk", "kdJnsOp", "kdJnsOpInduk", "kdKecamatan", "kdKecamatanInduk", "kdKelurahan", "kdKelurahanInduk", "kdPropinsi", "kdPropinsiInduk", "noUrut", "noUrutInduk"], {
  unique: true,
})
@Index("d10_fk2", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], {})
@Index("d10_fk1", ["kdBlokInduk", "kdDati2Induk", "kdJnsOpInduk", "kdKecamatanInduk", "kdKelurahanInduk", "kdPropinsiInduk", "noUrutInduk"], {})
@Entity("dat_op_anggota", { schema: "public" })
export class DatOpAnggota {
  @Column("character", { primary: true, name: "kd_propinsi_induk", length: 2 })
  kdPropinsiInduk!: string;

  @Column("character", { primary: true, name: "kd_dati2_induk", length: 2 })
  kdDati2Induk!: string;

  @Column("character", { primary: true, name: "kd_kecamatan_induk", length: 3 })
  kdKecamatanInduk!: string;

  @Column("character", { primary: true, name: "kd_kelurahan_induk", length: 3 })
  kdKelurahanInduk!: string;

  @Column("character", { primary: true, name: "kd_blok_induk", length: 3 })
  kdBlokInduk!: string;

  @Column("character", { primary: true, name: "no_urut_induk", length: 4 })
  noUrutInduk!: string;

  @Column("character", { primary: true, name: "kd_jns_op_induk", length: 1 })
  kdJnsOpInduk!: string;

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

  @Column("bigint", { name: "luas_bumi_beban", nullable: true })
  luasBumiBeban!: string | null;

  @Column("bigint", { name: "luas_bng_beban", nullable: true })
  luasBngBeban!: string | null;

  @Column("bigint", { name: "nilai_sistem_bumi_beban", nullable: true })
  nilaiSistemBumiBeban!: string | null;

  @Column("bigint", { name: "nilai_sistem_bng_beban", nullable: true })
  nilaiSistemBngBeban!: string | null;

  @Column("bigint", { name: "njop_bumi_beban", nullable: true })
  njopBumiBeban!: string | null;

  @Column("bigint", { name: "njop_bng_beban", nullable: true })
  njopBngBeban!: string | null;
}
