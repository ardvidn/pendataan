import { Column, Entity, Index } from "typeorm";

@Index("rincian_pembetulan_jabatan_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "noUrutRinciPembetulan", "pembetulanKe", "thnPembetulan"], { unique: true })
@Entity("rincian_pembetulan_jabatan", { schema: "public" })
export class RincianPembetulanJabatan {
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

  @Column("character", { primary: true, name: "thn_pembetulan", length: 4 })
  thnPembetulan!: string;

  @Column("smallint", { primary: true, name: "pembetulan_ke" })
  pembetulanKe!: number;

  @Column("character", {
    primary: true,
    name: "no_urut_rinci_pembetulan",
    length: 2,
  })
  noUrutRinciPembetulan!: string;

  @Column("character varying", {
    name: "pbl_uraian",
    nullable: true,
    length: 255,
  })
  pblUraian!: string | null;

  @Column("character varying", {
    name: "pbl_semula",
    nullable: true,
    length: 255,
  })
  pblSemula!: string | null;

  @Column("character varying", {
    name: "pbl_menjadi",
    nullable: true,
    length: 255,
  })
  pblMenjadi!: string | null;
}
