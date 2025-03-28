import { Column, Entity, Index } from "typeorm";

@Index("e13_2_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdKlsBng", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Index("e13_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdKlsTanah", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Index("skp_spop_op_bersama_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Entity("skp_spop_op_bersama", { schema: "public" })
export class SkpSpopOpBersama {
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

  @Column("character", {
    name: "kd_kls_tanah",
    length: 3,
    default: () => "'XXX'",
  })
  kdKlsTanah!: string;

  @Column("character", {
    name: "thn_awal_kls_tanah",
    length: 4,
    default: () => "'1986'",
  })
  thnAwalKlsTanah!: string;

  @Column("character", {
    name: "kd_kls_bng",
    length: 3,
    default: () => "'XXX'",
  })
  kdKlsBng!: string;

  @Column("character", {
    name: "thn_awal_kls_bng",
    length: 4,
    default: () => "'1986'",
  })
  thnAwalKlsBng!: string;

  @Column("bigint", { name: "luas_bumi_beban_skp_spop", default: () => "0" })
  luasBumiBebanSkpSpop!: string;

  @Column("bigint", { name: "luas_bng_beban_skp_spop", default: () => "0" })
  luasBngBebanSkpSpop!: string;

  @Column("bigint", { name: "njop_bumi_beban_skp_spop", default: () => "0" })
  njopBumiBebanSkpSpop!: string;

  @Column("bigint", { name: "njop_bng_beban_skp_spop", default: () => "0" })
  njopBngBebanSkpSpop!: string;
}
