import { Column, Entity, Index } from "typeorm";

@Index("telepon_pkey", ["kdArea", "noTelepon"], { unique: true })
@Index("bng_sin_telepon_fk", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBng", "noUrut"], {})
@Entity("telepon", { schema: "public" })
export class Telepon {
  @Column("character", { primary: true, name: "kd_area", length: 4 })
  kdArea!: string;

  @Column("character", { primary: true, name: "no_telepon", length: 8 })
  noTelepon!: string;

  @Column("character", { name: "kd_propinsi", nullable: true, length: 2 })
  kdPropinsi!: string | null;

  @Column("character", { name: "kd_dati2", nullable: true, length: 2 })
  kdDati2!: string | null;

  @Column("character", { name: "kd_kecamatan", nullable: true, length: 3 })
  kdKecamatan!: string | null;

  @Column("character", { name: "kd_kelurahan", nullable: true, length: 3 })
  kdKelurahan!: string | null;

  @Column("character", { name: "kd_blok", nullable: true, length: 3 })
  kdBlok!: string | null;

  @Column("character", { name: "no_urut", nullable: true, length: 4 })
  noUrut!: string | null;

  @Column("character", { name: "kd_jns_op", nullable: true, length: 1 })
  kdJnsOp!: string | null;

  @Column("smallint", { name: "no_bng", nullable: true })
  noBng!: number | null;
}
