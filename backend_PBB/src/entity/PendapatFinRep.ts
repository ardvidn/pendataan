import { Column, Entity, Index } from "typeorm";

@Index("pendapat_fin_rep_pkey", ["kdPendapat"], { unique: true })
@Entity("pendapat_fin_rep", { schema: "public" })
export class PendapatFinRep {
  @Column("character", { primary: true, name: "kd_pendapat", length: 2 })
  kdPendapat!: string;

  @Column("character varying", {
    name: "ket_pendapat",
    nullable: true,
    length: 30,
  })
  ketPendapat!: string | null;
}
