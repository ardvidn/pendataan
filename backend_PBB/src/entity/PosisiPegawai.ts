import { Column, Entity, Index } from "typeorm";

@Index("posisi_pegawai_pkey", ["kdKantor", "kdKanwil", "nip"], { unique: true })
@Entity("posisi_pegawai", { schema: "public" })
export class PosisiPegawai {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "nip", length: 18 })
  nip!: string;

  @Column("character", { name: "kd_seksi", length: 2 })
  kdSeksi!: string;

  @Column("timestamp without time zone", { name: "tgl_awal_berlaku" })
  tglAwalBerlaku!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_akhir_berlaku",
    default: () => "to_date('01019999', 'DDMMYYYY'::text)",
  })
  tglAkhirBerlaku!: Date;

  @Column("character", { name: "kd_wewenang", length: 2 })
  kdWewenang!: string;

  @Column("character", { name: "kd_jabatan", length: 2 })
  kdJabatan!: string;
}
