import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { DatFasilitasBangunan } from "./DatFasilitasBangunan";
import { DatJpb12 } from "./DatJpb12";
import { DatJpb13 } from "./DatJpb13";
import { DatJpb14 } from "./DatJpb14";
import { DatJpb15 } from "./DatJpb15";
import { DatJpb16 } from "./DatJpb16";
import { DatJpb2 } from "./DatJpb2";
import { DatJpb3 } from "./DatJpb3";
import { DatJpb4 } from "./DatJpb4";
import { DatJpb5 } from "./DatJpb5";
import { DatJpb6 } from "./DatJpb6";
import { DatJpb7 } from "./DatJpb7";
import { DatJpb8 } from "./DatJpb8";
import { DatJpb9 } from "./DatJpb9";
import { DatObjekPajak } from "./DatObjekPajak";

@Index("d14_2_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nipPerekamBng", "noBng", "noUrut"], { unique: true })
@Index("d14_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdJpb", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Index("dat_op_bangunan_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Index("d14_3_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noFormulirLspop", "noUrut"], { unique: true })
@Entity("dat_op_bangunan", { schema: "public" })
export class DatOpBangunan {
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

  @Column("smallint", { primary: true, name: "no_bng" })
  noBng!: number;

  @Column("character", { name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { name: "no_formulir_lspop", length: 11 })
  noFormulirLspop!: string;

  @Column("character", {
    name: "thn_dibangun_bng",
    length: 4,
    default: () => "to_char(statement_timestamp(), 'YYYY')",
  })
  thnDibangunBng!: string;

  @Column("character", { name: "thn_renovasi_bng", nullable: true, length: 4 })
  thnRenovasiBng!: string | null;

  @Column("bigint", { name: "luas_bng", default: () => "0" })
  luasBng!: string;

  @Column("smallint", { name: "jml_lantai_bng", default: () => "1" })
  jmlLantaiBng!: number;

  @Column("character", { name: "kondisi_bng", length: 1 })
  kondisiBng!: string;

  @Column("character", {
    name: "jns_konstruksi_bng",
    nullable: true,
    length: 1,
  })
  jnsKonstruksiBng!: string | null;

  @Column("character", { name: "jns_atap_bng", nullable: true, length: 1 })
  jnsAtapBng!: string | null;

  @Column("character", { name: "kd_dinding", nullable: true, length: 1 })
  kdDinding!: string | null;

  @Column("character", { name: "kd_lantai", nullable: true, length: 1 })
  kdLantai!: string | null;

  @Column("character", { name: "kd_langit_langit", nullable: true, length: 1 })
  kdLangitLangit!: string | null;

  @Column("bigint", { name: "nilai_sistem_bng" })
  nilaiSistemBng!: string;

  @Column("character", {
    name: "jns_transaksi_bng",
    length: 1,
    default: () => "'1'",
  })
  jnsTransaksiBng!: string;

  @Column("timestamp without time zone", { name: "tgl_pendataan_bng" })
  tglPendataanBng!: Date;

  @Column("character", { name: "nip_pendata_bng", length: 18 })
  nipPendataBng!: string;

  @Column("timestamp without time zone", { name: "tgl_pemeriksaan_bng" })
  tglPemeriksaanBng!: Date;

  @Column("character", { name: "nip_pemeriksa_bng", length: 18 })
  nipPemeriksaBng!: string;

  @Column("timestamp without time zone", {
    name: "tgl_perekaman_bng",
    default: () => "statement_timestamp()",
  })
  tglPerekamanBng!: Date;

  @Column("character", { name: "nip_perekam_bng", length: 18 })
  nipPerekamBng!: string;

  @OneToMany(() => DatFasilitasBangunan, (datFasilitasBangunan) => datFasilitasBangunan.datOpBangunan)
  datFasilitasBangunans!: DatFasilitasBangunan[];

  @OneToOne(() => DatJpb12, (datJpb12) => datJpb12.datOpBangunan)
  datJpb!: DatJpb12;

  @OneToOne(() => DatJpb13, (datJpb13) => datJpb13.datOpBangunan)
  datJp10!: DatJpb13;

  @OneToOne(() => DatJpb14, (datJpb14) => datJpb14.datOpBangunan)
  datJp11!: DatJpb14;

  @OneToOne(() => DatJpb15, (datJpb15) => datJpb15.datOpBangunan)
  datJp12!: DatJpb15;

  @OneToOne(() => DatJpb16, (datJpb16) => datJpb16.datOpBangunan)
  datJp13!: DatJpb16;

  @OneToOne(() => DatJpb2, (datJpb2) => datJpb2.datOpBangunan)
  datJpb2!: DatJpb2;

  @OneToOne(() => DatJpb3, (datJpb3) => datJpb3.datOpBangunan)
  datJpb3!: DatJpb3;

  @OneToOne(() => DatJpb4, (datJpb4) => datJpb4.datOpBangunan)
  datJpb4!: DatJpb4;

  @OneToOne(() => DatJpb5, (datJpb5) => datJpb5.datOpBangunan)
  datJpb5!: DatJpb5;

  @OneToOne(() => DatJpb6, (datJpb6) => datJpb6.datOpBangunan)
  datJpb6!: DatJpb6;

  @OneToOne(() => DatJpb7, (datJpb7) => datJpb7.datOpBangunan)
  datJpb7!: DatJpb7;

  @OneToOne(() => DatJpb8, (datJpb8) => datJpb8.datOpBangunan)
  datJpb8!: DatJpb8;

  @OneToOne(() => DatJpb9, (datJpb9) => datJpb9.datOpBangunan)
  datJpb9!: DatJpb9;

  @ManyToOne(() => DatObjekPajak, (datObjekPajak) => datObjekPajak.datOpBangunans)
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
}
