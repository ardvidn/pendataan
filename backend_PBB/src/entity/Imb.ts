import { Column, Entity, Index } from "typeorm";

@Index("bng_sin_imb_fk", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], {})
@Index("rel_jenis_imb_fk", ["kdJnsImb"], {})
@Index("imb_pkey", ["noImb"], { unique: true })
@Entity("imb", { schema: "public" })
export class Imb {
  @Column("character", { primary: true, name: "no_imb", length: 30 })
  noImb!: string;

  @Column("character", { name: "kd_jns_imb", length: 2 })
  kdJnsImb!: string;

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

  @Column("smallint", { name: "no_bng" })
  noBng!: number;

  @Column("timestamp without time zone", { name: "tgl_imb", nullable: true })
  tglImb!: Date | null;

  @Column("character varying", { name: "nama_imb", nullable: true, length: 30 })
  namaImb!: string | null;
}
