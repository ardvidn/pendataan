import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb3_pkey", ["kdDati2", "kdPropinsi", "simLbrBentMaxDbkbJpb3", "simLbrBentMinDbkbJpb3", "simThnDbkbJpb3", "simTingKolomMaxDbkbJpb3", "simTingKolomMinDbkbJpb3"], { unique: true })
@Entity("sim_dbkb_jpb3", { schema: "public" })
export class SimDbkbJpb3 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb3", length: 4 })
  simThnDbkbJpb3!: string;

  @Column("smallint", { primary: true, name: "sim_lbr_bent_min_dbkb_jpb3" })
  simLbrBentMinDbkbJpb3!: number;

  @Column("smallint", { primary: true, name: "sim_lbr_bent_max_dbkb_jpb3" })
  simLbrBentMaxDbkbJpb3!: number;

  @Column("smallint", { primary: true, name: "sim_ting_kolom_min_dbkb_jpb3" })
  simTingKolomMinDbkbJpb3!: number;

  @Column("smallint", { primary: true, name: "sim_ting_kolom_max_dbkb_jpb3" })
  simTingKolomMaxDbkbJpb3!: number;

  @Column("numeric", { name: "sim_nilai_dbkb_jpb3", precision: 12, scale: 2 })
  simNilaiDbkbJpb3!: string;
}
