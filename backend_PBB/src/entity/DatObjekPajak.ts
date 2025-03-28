import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { DatPetaBlok } from "./DatPetaBlok";
import { DatSubjekPajak } from "./DatSubjekPajak";
import { DatOpBangunan } from "./DatOpBangunan";
import { DatOpBumi } from "./DatOpBumi";
import { DatSubjekPajakNjoptkp } from "./DatSubjekPajakNjoptkp";
import { Skp } from "./Skp";
import { Sppt } from "./Sppt";
import { Stp } from "./Stp";

@Index("d7_2_ak", ["blokKavNoOp", "jalanOp", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "rtOp", "rwOp"], { unique: true })
@Index("dat_objek_pajak_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], { unique: true })
@Index("d7_7_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noFormulirSpop", "noUrut"], { unique: true })
@Index("d7_6_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], { unique: true })
@Index("d7_5_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdStatusWp", "noUrut"], { unique: true })
@Index("d7_4_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdStatusCabang", "noUrut"], { unique: true })
@Index("d7_3_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "nipPerekamOp", "noUrut"], { unique: true })
@Index("d7_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "subjekPajakId"], { unique: true })
@Entity("dat_objek_pajak", { schema: "public" })
export class DatObjekPajak {
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

  @Column("character", { name: "subjek_pajak_id", length: 30 })
  subjekPajakId!: string;

  @Column("character", { name: "no_formulir_spop", length: 11 })
  noFormulirSpop!: string;

  @Column("character varying", { name: "no_persil", nullable: true, length: 5 })
  noPersil!: string | null;

  @Column("character varying", { name: "jalan_op", length: 50 })
  jalanOp!: string;

  @Column("character varying", {
    name: "blok_kav_no_op",
    nullable: true,
    length: 15,
  })
  blokKavNoOp!: string | null;

  @Column("character", { name: "rw_op", nullable: true, length: 2 })
  rwOp!: string | null;

  @Column("character", { name: "rt_op", nullable: true, length: 3 })
  rtOp!: string | null;

  @Column("smallint", { name: "kd_status_cabang", default: () => "1" })
  kdStatusCabang!: number;

  @Column("character", {
    name: "kd_status_wp",
    length: 1,
    default: () => "'1'",
  })
  kdStatusWp!: string;

  @Column("bigint", { name: "total_luas_bumi", default: () => "0" })
  totalLuasBumi!: string;

  @Column("bigint", { name: "total_luas_bng", default: () => "0" })
  totalLuasBng!: string;

  @Column("bigint", { name: "njop_bumi", default: () => "0" })
  njopBumi!: string;

  @Column("bigint", { name: "njop_bng", default: () => "0" })
  njopBng!: string;

  @Column("smallint", { name: "status_peta_op", default: () => "0" })
  statusPetaOp!: number;

  @Column("character", {
    name: "jns_transaksi_op",
    length: 1,
    default: () => "'1'",
  })
  jnsTransaksiOp!: string;

  @Column("timestamp without time zone", { name: "tgl_pendataan_op" })
  tglPendataanOp!: Date;

  @Column("character", { name: "nip_pendata", length: 18 })
  nipPendata!: string;

  @Column("timestamp without time zone", { name: "tgl_pemeriksaan_op" })
  tglPemeriksaanOp!: Date;

  @Column("character", { name: "nip_pemeriksa_op", length: 18 })
  nipPemeriksaOp!: string;

  @Column("timestamp without time zone", {
    name: "tgl_perekaman_op",
    default: () => "statement_timestamp()",
  })
  tglPerekamanOp!: Date;

  @Column("character", { name: "nip_perekam_op", length: 18 })
  nipPerekamOp!: string;

  @ManyToOne(() => DatPetaBlok, (datPetaBlok) => datPetaBlok.datObjekPajaks)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
  ])
  datPetaBlok!: DatPetaBlok;

  @ManyToOne(() => DatSubjekPajak, (datSubjekPajak) => datSubjekPajak.datObjekPajaks)
  @JoinColumn([{ name: "subjek_pajak_id", referencedColumnName: "subjekPajakId" }])
  subjekPajak!: DatSubjekPajak;

  @OneToMany(() => DatOpBangunan, (datOpBangunan) => datOpBangunan.datObjekPajak)
  datOpBangunans!: DatOpBangunan[];

  @OneToMany(() => DatOpBumi, (datOpBumi) => datOpBumi.datObjekPajak)
  datOpBumis!: DatOpBumi[];

  @OneToMany(() => DatSubjekPajakNjoptkp, (datSubjekPajakNjoptkp) => datSubjekPajakNjoptkp.datObjekPajak)
  datSubjekPajakNjoptkps!: DatSubjekPajakNjoptkp[];

  @OneToMany(() => Skp, (skp) => skp.datObjekPajak)
  skps!: Skp[];

  @OneToMany(() => Sppt, (sppt) => sppt.datObjekPajak)
  sppts!: Sppt[];

  @OneToMany(() => Stp, (stp) => stp.datObjekPajak)
  stps!: Stp[];
}
