import { Column, Entity } from "typeorm";

@Entity("my_dukuh", { schema: "public" })
export class MyDukuh {
  @Column("character", { name: "kd_kecamatan", nullable: true, length: 3 })
  kdKecamatan!: string | null;

  @Column("character", { name: "kd_kelurahan", nullable: true, length: 3 })
  kdKelurahan!: string | null;

  @Column("character", { name: "kd_dukuh", nullable: true, length: 3 })
  kdDukuh!: string | null;

  @Column("character varying", {
    name: "nm_dukuh",
    nullable: true,
    length: 255,
  })
  nmDukuh!: string | null;

  @Column("smallint", { name: "is_active", nullable: true, default: () => "1" })
  isActive!: number | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt!: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt!: Date | null;
}
