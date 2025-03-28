import { Column, Entity, Index } from "typeorm";

@Index("his_op_bng_pkey", ["hisIndeksOpBng", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Index("x11_1_ak", ["hisIndeksOpBng", "kdBlok", "kdDati2", "kdJnsOp", "kdJpb", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], { unique: true })
@Entity("his_op_bng", { schema: "public" })
export class HisOpBng {
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

  @Column("smallint", { primary: true, name: "his_indeks_op_bng" })
  hisIndeksOpBng!: number;

  @Column("character", { name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { name: "his_no_formulir_op_bng", length: 11 })
  hisNoFormulirOpBng!: string;

  @Column("bigint", { name: "his_luas_bng" })
  hisLuasBng!: string;

  @Column("bigint", { name: "his_nilai_bng" })
  hisNilaiBng!: string;

  @Column("timestamp without time zone", { name: "his_tgl_perekaman_bng_awal" })
  hisTglPerekamanBngAwal!: Date;

  @Column("character", { name: "his_nip_perekam_bng_awal", length: 18 })
  hisNipPerekamBngAwal!: string;
}
