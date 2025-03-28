import { Column, Entity, Index } from "typeorm";

@Index("x10_2_ak", ["hisIndeksOp", "hisStatusCabang", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], { unique: true })
@Index("his_objek_pajak_pkey", ["hisIndeksOp", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], { unique: true })
@Index("x10_3_ak", ["hisIndeksOp", "hisStatusWp", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], { unique: true })
@Index("x10_1_ak", ["hisIndeksOp", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "subjekPajakId"], { unique: true })
@Entity("his_objek_pajak", { schema: "public" })
export class HisObjekPajak {
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

  @Column("smallint", { primary: true, name: "his_indeks_op" })
  hisIndeksOp!: number;

  @Column("character", { name: "subjek_pajak_id", length: 30 })
  subjekPajakId!: string;

  @Column("smallint", { name: "his_status_cabang" })
  hisStatusCabang!: number;

  @Column("smallint", { name: "his_status_wp" })
  hisStatusWp!: number;

  @Column("bigint", { name: "his_total_luas_bng" })
  hisTotalLuasBng!: string;

  @Column("timestamp without time zone", { name: "his_tgl_perekaman_awal" })
  hisTglPerekamanAwal!: Date;

  @Column("character", { name: "his_nip_perekam_op", length: 18 })
  hisNipPerekamOp!: string;

  @Column("character", {
    name: "his_no_formulir_spop",
    nullable: true,
    length: 11,
  })
  hisNoFormulirSpop!: string | null;

  @Column("bigint", { name: "his_total_luas_bumi", nullable: true })
  hisTotalLuasBumi!: string | null;

  @Column("bigint", { name: "his_njop_bumi", nullable: true })
  hisNjopBumi!: string | null;

  @Column("bigint", { name: "his_njop_bng", nullable: true })
  hisNjopBng!: string | null;
}
