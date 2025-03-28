import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_material_pkey", ["kdDati2", "kdKegiatan", "kdPekerjaan", "kdPropinsi", "simThnDbkbMaterial"], { unique: true })
@Entity("sim_dbkb_material", { schema: "public" })
export class SimDbkbMaterial {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "sim_thn_dbkb_material",
    length: 4,
  })
  simThnDbkbMaterial!: string;

  @Column("character", { primary: true, name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character", { primary: true, name: "kd_kegiatan", length: 2 })
  kdKegiatan!: string;

  @Column("integer", { name: "sim_nilai_dbkb_material" })
  simNilaiDbkbMaterial!: number;
}
