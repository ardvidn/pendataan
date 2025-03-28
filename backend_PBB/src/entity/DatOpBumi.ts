import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { DatObjekPajak } from "./DatObjekPajak";
import { DatPetaZnt } from "./DatPetaZnt";

@Index("d6_2_ak", ["jnsBumi", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBumi", "noUrut"], { unique: true })
@Index("d6_3_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "luasBumi", "noBumi", "noUrut"], { unique: true })
@Index("d6_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdZnt", "noBumi", "noUrut"], { unique: true })
@Index("dat_op_bumi_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBumi", "noUrut"], { unique: true })
@Entity("dat_op_bumi", { schema: "public" })
export class DatOpBumi {
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

  @Column("smallint", { primary: true, name: "no_bumi", default: () => "1" })
  noBumi!: number;

  @Column("character", { name: "kd_znt", length: 2 })
  kdZnt!: string;

  @Column("bigint", { name: "luas_bumi", default: () => "0" })
  luasBumi!: string;

  @Column("character", { name: "jns_bumi", length: 1, default: () => "'1'" })
  jnsBumi!: string;

  @Column("bigint", { name: "nilai_sistem_bumi", default: () => "0" })
  nilaiSistemBumi!: string;

  @ManyToOne(() => DatObjekPajak, (datObjekPajak) => datObjekPajak.datOpBumis)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
  ])
  datObjekPajak!: DatObjekPajak;

  @ManyToOne(() => DatPetaZnt, (datPetaZnt) => datPetaZnt.datOpBumis)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "kd_znt", referencedColumnName: "kdZnt" },
  ])
  datPetaZnt!: DatPetaZnt;
}
