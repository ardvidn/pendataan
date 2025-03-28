import { Column, Entity, Index } from "typeorm";

@Index("perkembangan_pokok_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "tglPokok"], { unique: true })
@Entity("perkembangan_pokok", { schema: "public" })
export class PerkembanganPokok {
  @Column("timestamp without time zone", { primary: true, name: "tgl_pokok" })
  tglPokok!: Date;

  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("integer", { name: "jml_sppt", nullable: true })
  jmlSppt!: number | null;

  @Column("bigint", { name: "jml_pokok", nullable: true })
  jmlPokok!: string | null;
}
