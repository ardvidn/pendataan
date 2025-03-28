import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("dbkb_material_pkey", ["kdDati2", "kdKegiatan", "kdPekerjaan", "kdPropinsi", "thnDbkbMaterial"], { unique: true })
@Index("c12_1_ak", ["kdDati2", "kdKegiatan", "kdPekerjaan", "kdPropinsi", "thnDbkbMaterial"], { unique: true })
@Index("c12_2_ak", ["kdDati2", "kdKegiatan", "kdPekerjaan", "kdPropinsi", "thnDbkbMaterial"], { unique: true })
@Entity("dbkb_material", { schema: "public" })
export class DbkbMaterial {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_material", length: 4 })
  thnDbkbMaterial!: string;

  @Column("character", { primary: true, name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character", { primary: true, name: "kd_kegiatan", length: 2 })
  kdKegiatan!: string;

  @Column("numeric", { name: "nilai_dbkb_material", precision: 12, scale: 2 })
  nilaiDbkbMaterial!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbMaterials)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
