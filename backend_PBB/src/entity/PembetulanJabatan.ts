import { Column, Entity, Index } from "typeorm";

@Index("pembetulan_jabatan_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "pembetulanKe", "thnPembetulan"], { unique: true })
@Index("idx_pembetulan_jabatan", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "pembetulanKe", "thnPembetulan"], { unique: true })
@Entity("pembetulan_jabatan", { schema: "public" })
export class PembetulanJabatan {
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

  @Column("character", { name: "jns_sk", length: 1 })
  jnsSk!: string;

  @Column("character", { name: "no_sk", length: 30 })
  noSk!: string;

  @Column("character", {
    name: "jns_surat_yg_dibetulkan",
    nullable: true,
    length: 2,
  })
  jnsSuratYgDibetulkan!: string | null;

  @Column("character varying", {
    name: "no_surat_yg_dibetulkan",
    nullable: true,
    length: 30,
  })
  noSuratYgDibetulkan!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_surat_yg_dibetulkan",
    nullable: true,
  })
  tglSuratYgDibetulkan!: Date | null;
}
