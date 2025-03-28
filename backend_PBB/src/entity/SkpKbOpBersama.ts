import { Column, Entity, Index } from "typeorm";

@Index("skp_kb_op_bersama_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpKb"], { unique: true })
@Index("e14_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdKlsTanah", "kdPropinsi", "noUrut", "thnPajakSkpKb"], { unique: true })
@Index("e14_2_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdKlsBng", "kdPropinsi", "noUrut", "thnPajakSkpKb"], { unique: true })
@Entity("skp_kb_op_bersama", { schema: "public" })
export class SkpKbOpBersama {
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

  @Column("character", { primary: true, name: "thn_pajak_skp_kb", length: 4 })
  thnPajakSkpKb!: string;

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

  @Column("bigint", { name: "luas_bumi_beban_skp_kb", default: () => "0" })
  luasBumiBebanSkpKb!: string;

  @Column("bigint", { name: "luas_bng_beban_skp_kb", default: () => "0" })
  luasBngBebanSkpKb!: string;

  @Column("bigint", { name: "njop_bumi_beban_skp_kb", default: () => "0" })
  njopBumiBebanSkpKb!: string;

  @Column("bigint", { name: "njop_bng_beban_skp_kb", default: () => "0" })
  njopBngBebanSkpKb!: string;
}
