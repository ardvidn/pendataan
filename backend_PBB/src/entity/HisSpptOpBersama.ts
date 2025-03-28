import { Column, Entity, Index } from "typeorm";

@Index("his_sppt_op_bersama_pkey", ["hisIndeksPerubahanSppt", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Index("x2_1_ak", ["hisIndeksPerubahanSppt", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Entity("his_sppt_op_bersama", { schema: "public" })
export class HisSpptOpBersama {
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

  @Column("character", { primary: true, name: "thn_pajak_sppt", length: 4 })
  thnPajakSppt!: string;

  @Column("smallint", { primary: true, name: "his_indeks_perubahan_sppt" })
  hisIndeksPerubahanSppt!: number;

  @Column("bigint", { name: "his_luas_bumi_beban_sppt" })
  hisLuasBumiBebanSppt!: string;

  @Column("bigint", { name: "his_luas_bng_beban_sppt" })
  hisLuasBngBebanSppt!: string;

  @Column("bigint", { name: "his_njop_bumi_beban_sppt" })
  hisNjopBumiBebanSppt!: string;

  @Column("bigint", { name: "his_njop_bng_beban_sppt" })
  hisNjopBngBebanSppt!: string;
}
