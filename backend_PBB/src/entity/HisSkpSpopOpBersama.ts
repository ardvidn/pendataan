import { Column, Entity, Index } from "typeorm";

@Index("his_skp_spop_op_bersama_pkey", ["hisIndeksPerubahanSkpSpop", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Index("x4_1_ak", ["hisIndeksPerubahanSkpSpop", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Entity("his_skp_spop_op_bersama", { schema: "public" })
export class HisSkpSpopOpBersama {
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

  @Column("character", { primary: true, name: "thn_pajak_skp_spop", length: 4 })
  thnPajakSkpSpop!: string;

  @Column("smallint", { primary: true, name: "his_indeks_perubahan_skp_spop" })
  hisIndeksPerubahanSkpSpop!: number;

  @Column("bigint", { name: "his_luas_bumi_beban_skp_spop" })
  hisLuasBumiBebanSkpSpop!: string;

  @Column("bigint", { name: "his_luas_bng_beban_skp_spop" })
  hisLuasBngBebanSkpSpop!: string;

  @Column("bigint", { name: "his_njop_bumi_beban_skp_spop" })
  hisNjopBumiBebanSkpSpop!: string;

  @Column("bigint", { name: "his_njop_bng_beban_skp_spop" })
  hisNjopBngBebanSkpSpop!: string;
}
