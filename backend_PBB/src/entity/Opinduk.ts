import { Column, Entity } from "typeorm";

@Entity("opinduk", { schema: "public" })
export class Opinduk {
  @Column("character", { name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character varying", {
    name: "alamat_op",
    nullable: true,
    length: 77,
  })
  alamatOp!: string | null;

  @Column("character varying", { name: "nm_wp", length: 30 })
  nmWp!: string;

  @Column("character varying", {
    name: "alamat_wp",
    nullable: true,
    length: 77,
  })
  alamatWp!: string | null;

  @Column("bigint", { name: "total_luas_bumi" })
  totalLuasBumi!: string;

  @Column("bigint", { name: "total_luas_bng" })
  totalLuasBng!: string;

  @Column("bigint", { name: "njop_bumi" })
  njopBumi!: string;

  @Column("bigint", { name: "njop_bng" })
  njopBng!: string;
}
