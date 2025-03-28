import { Column, Entity, Index } from "typeorm";

@Index("x12_1_ak", ["hisIndeksOpBumi", "hisJnsBumi", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBumi", "noUrut"], { unique: true })
@Index("his_op_bumi_pkey", ["hisIndeksOpBumi", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBumi", "noUrut"], { unique: true })
@Index("x12_2_ak", ["hisIndeksOpBumi", "hisLuasBumi", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBumi", "noUrut"], { unique: true })
@Index("x12_3_ak", ["hisIndeksOpBumi", "hisKdZnt", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBumi", "noUrut"], { unique: true })
@Entity("his_op_bumi", { schema: "public" })
export class HisOpBumi {
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

  @Column("smallint", { primary: true, name: "no_bumi" })
  noBumi!: number;

  @Column("smallint", { primary: true, name: "his_indeks_op_bumi" })
  hisIndeksOpBumi!: number;

  @Column("bigint", { name: "his_luas_bumi" })
  hisLuasBumi!: string;

  @Column("character", { name: "his_jns_bumi", length: 1 })
  hisJnsBumi!: string;

  @Column("bigint", { name: "his_nilai_sistem_bumi" })
  hisNilaiSistemBumi!: string;

  @Column("character", { name: "his_kd_znt", length: 2 })
  hisKdZnt!: string;
}
