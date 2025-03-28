import { Column, Entity, Index } from "typeorm";

@Index("adj_material_pkey", ["kdKegiatan", "kdPekerjaan"], { unique: true })
@Entity("adj_material", { schema: "public" })
export class AdjMaterial {
  @Column("character", { primary: true, name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character", { primary: true, name: "kd_kegiatan", length: 2 })
  kdKegiatan!: string;

  @Column("numeric", { name: "pct_adj_mtrl_1", precision: 5, scale: 2 })
  pctAdjMtrl_1!: string;

  @Column("numeric", { name: "pct_adj_mtrl_2", precision: 5, scale: 2 })
  pctAdjMtrl_2!: string;

  @Column("character varying", { name: "deskripsi_adj", length: 50 })
  deskripsiAdj!: string;
}
